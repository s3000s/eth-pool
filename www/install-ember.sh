echo "Installing ember & dependencies"
sudo npm install -g ember-cli@2.9.1
sudo npm install -g bower
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
npm install
bower install
//if your going to run as root, you may need to run " bower install --allow-root "
./build.sh
echo "ember installed"
