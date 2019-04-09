const myString = `
sudo snap refresh
sudo snap install docker
sudo snap start docker
sudo curl -L https://github.com/docker/compose/releases/download/1.24.0/docker-compose-Linux-x86_64 -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
git clone https://github.com/kendricktan/elixir-omg.git
cd elixir-omg
sudo docker-compose up -d
`

export default myString
