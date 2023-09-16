### Terraform notes

```
terraform plan
terraform apply
```

### Configuring terraform for Oracle Cloud

see https://blogs.oracle.com/developers/post/using-terraform-to-create-container-instances-in-oracle-cloud-infrastructure

### Docker setup

Building and running the docker image

```
docker buildx build --platform=linux/amd64 -t cq-studio:v1 .
docker run -p 5328:5328 -d cq-studio:v1
```

Running docker container interactively

```
docker run -it cq-studio:v1 /bin/bash
```
