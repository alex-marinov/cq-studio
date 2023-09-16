variable "config_file_profile" { }
variable "tenancy_ocid" { }
variable "home_ip" { }

terraform {
  required_providers {
    oci = {
      source = "oracle/oci"
      version = ">= 4.107.0"
    }
  }
}

provider "oci" {
  config_file_profile = var.config_file_profile
}

resource "oci_core_vcn" "demo_vcn" {
  compartment_id = var.tenancy_ocid
  cidr_block     = "10.0.0.0/16"
  display_name   = "Demo VCN"
  dns_label      = "demo"
}

resource "oci_core_security_list" "public_sn_sl" {
  compartment_id = var.tenancy_ocid
  vcn_id = oci_core_vcn.demo_vcn.id
  display_name = "demo-vcn - security list for the public subnet"
  ingress_security_rules {
    protocol = 6
    source_type = "CIDR_BLOCK"
    source = var.home_ip
    description = "access to container instance port 80 from home"
    tcp_options {
      min = 80
      max = 80
    }
  }
  egress_security_rules {
    protocol = 6
    destination_type = "CIDR_BLOCK"
    destination = "0.0.0.0/0"
    description = "access to container registries via HTTPS"
    tcp_options {
      min = 443
      max = 443
    }
  }
}

resource "oci_core_subnet" "demo_subnet" {
  cidr_block = "10.0.0.0/24"
  compartment_id = var.tenancy_ocid
  vcn_id = oci_core_vcn.demo_vcn.id
  display_name = "demo vcn - container instance (public) subnet"
  dns_label = "containers"
  security_list_ids = [ 
    oci_core_security_list.public_sn_sl.id
  ]
  route_table_id = oci_core_route_table.demo_igw_rt.id
}

resource "oci_core_internet_gateway" "demo_igw" {
  compartment_id = var.tenancy_ocid
  vcn_id = oci_core_vcn.demo_vcn.id
  display_name = "demo-vcn - Internet gateway"
  enabled = true
}

resource "oci_core_route_table" "demo_igw_rt" {
  compartment_id = var.tenancy_ocid
  vcn_id = oci_core_vcn.demo_vcn.id
  display_name = "demo-vcn - Internet gateway route table"
  route_rules {
    network_entity_id = oci_core_internet_gateway.demo_igw.id
    destination = "0.0.0.0/0"
  }
}

data "oci_identity_availability_domains" "local_ads" {
  compartment_id = var.tenancy_ocid
}

resource "oci_container_instances_container_instance" "demo_container_instance" {
  availability_domain = data.oci_identity_availability_domains.local_ads.availability_domains.0.name
  compartment_id = var.tenancy_ocid
  display_name = "demo container instance"
  container_restart_policy = "ALWAYS"
  shape = "CI.Standard.E4.Flex"
  shape_config {
    memory_in_gbs = 4
    ocpus = 1
  }
  vnics {
    subnet_id = oci_core_subnet.demo_subnet.id
    display_name = "demo-container-instance"
    is_public_ip_assigned = true
    nsg_ids = []
  }
  containers {
    image_url = "httpd:2.4"
    display_name = "demo apache http server container"
  }
}

