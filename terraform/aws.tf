provider "aws" {
  region = "us-east-1"
}

resource "aws_security_group" "ec2" {
  name        = "plasmanode_allowall"
  description = "Allow TLS inbound traffic"

  ingress {
    # TLS (change to whatever ports you need)
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    # TLS (change to whatever ports you need)
    from_port   = 0
    to_port     = 65535
    protocol    = "udp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 65535
    protocol    = "udp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_key_pair" "plasma-key" {
  key_name   = "plasma-key"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6tJXKF07uAYr3706YQofszd7Of1NlvIkdAK+u4R8kKmh4+vU9kRHJ1qlaPTrrPeylWAiZsdaduFPfh4NuK9r9Jh5OljpesQ11Mng2VSqwR7EzwStbtrSBzwpff8dsFEqsuCVs+aAmxouTeBdq+hhDgCQnpPMFb+mwy8kxR+C0rRzMZXXEgW/UPq985kbaQvRPNblS8mvor2LuSFEPQRA3PBHZq1MjfXb//YfJfK09jI639aykMGYLRdxHPQpVuMAxQN9wqXvtbZ2F6jSQ/Thpe51nv6TrohVXQ4ofWkGt8B0ZrFExfk6L4CE9STZvpdbBZIIOkwh9Rq7w0d7oNRVB kendrick@kendrick-t460s"
}

resource "aws_instance" "plasma-node" {
  instance_type          = "c5.xlarge"
  ami                    = "ami-030cd17b75425e48d"
  vpc_security_group_ids = ["${aws_security_group.ec2.id}"]
  key_name               = "${aws_key_pair.plasma-key.key_name}"

  connection {
    type        = "ssh"
    host        = "${aws_instance.plasma-node.public_ip}"
    user        = "ubuntu"
    port        = "22"
    private_key = "${file("~/.ssh/id_rsa")}"
    agent       = false
  }

  provisioner "remote-exec" {
    inline = [
      "sudo snap refresh",
      "sudo snap install docker",
      "sudo snap start docker",
      "sudo curl -L https://github.com/docker/compose/releases/download/1.24.0/docker-compose-Linux-x86_64 -o /usr/local/bin/docker-compose",
      "sudo chmod +x /usr/local/bin/docker-compose",
      "git clone https://github.com/kendricktan/elixir-omg.git",
      "cd elixir-omg",
      "sudo docker-compose up -d"
    ]
  }
}
