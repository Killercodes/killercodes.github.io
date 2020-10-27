#update package
pkg upgrade

# Install runtime deps
#pkg install python libzmq libcrypt
pkg install python python libzmq libcrypt clang

# Add build deps
pip3 install -U pip3
pip3 install pyzmq --install-option="--zmq=/usr/lib"
pip3 install jupyter

# to set password
jupyter notebook password

# to start on 
jupyter notebook --ip 192.168.1.5 --port 8888


