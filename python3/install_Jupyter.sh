#update package
pkg upgrade

# Install runtime deps
#pkg install python libzmq libcrypt
pkg install python python libzmq libcrypt clang

# Add build deps
pip3 install -U pip
pip3 install pyzmq --install-option="--zmq=/usr/lib"
pip3 install jupyter
