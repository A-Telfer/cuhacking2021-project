# clone nginx-rtmp-module
git clone https://github.com/sergey-dryabzhinsky/nginx-rtmp-module.git

# install nginx dependencies
sudo apt-get install -y build-essential libpcre3 libpcre3-dev libssl-dev libpng-dev zlib1g-dev

# download nginx
wget http://nginx.org/download/nginx-1.18.0.tar.gz
tar -xf nginx-1.18.0.tar.gz
cd nginx-1.18.0

# compile
./configure --with-http_ssl_module --add-module=../nginx-rtmp-module
make -j 2
sudo make install

# copy to config over
sudo cp nginx.conf /usr/local/nginx/conf/nginx.conf

# test config
sudo /usr/local/nginx/sbin/nginx -t

# start nginx
sudo /usr/local/nginx/sbin/nginx