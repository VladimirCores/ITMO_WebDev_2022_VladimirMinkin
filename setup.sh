apt install curl
apt install git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
echo export PORT=3003 >> .bashrc
source .bashrc
npm i -g pm2
apt-get update
apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
