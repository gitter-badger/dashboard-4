#!/bin/bash
clear

echo -e "\033[1;34m######################"
echo "# DASHBOARD SRVR 0.1 #"
echo -e "######################\033[0m by @sqrdcat 2015"
echo ""
echo ""
echo "Welcome to the node dashboard server app bash helper. Keep in mind that :"
echo "	1. To use the application you must have installed meteor and nodejs"
echo "	2. The README and the GITHUB WIKI for sqrdcat/dashtd are a great place to get help"
echo "	3. This is a non profit project licensed under the MIT License."
echo ""
echo ""
echo -e "\033[32m List of arguments :"
echo "	st 	starts the server in background"
echo "	cpt 4949	starts the server with the custom port 4949, use cpd for console output"
echo -e "	db	starts server without nohup, printing the output to the console. \033[0m" 
echo ""
if [ "$1" == "st" ]; then
	echo "Please wait..."
	sleep 2
	clear
	echo ""
	echo ""
	    if hash meteor 2>/dev/null; then
        echo "Checking if meteor is installed... DONE!"
        echo ""
        echo "Running server with nohup..."
        echo -e "\033[31m TIP : If the console does not return the prompt, press control-c ! The server will still be running.\033[0m"
        echo ""
        echo -e "\033[31m TIP : The output of the meteor server will be printed to nohup.opt\033[0m"
        echo "========================================"
        echo ""
        echo "poopyfull."
    else
        echo -e "Checking if meteor is installed... \033[31mFAIL!\033[0m"
        echo ""
        echo "Please install meteor before continuing."
    fi
fi

if [ "$1" == "db" ]; then
	sleep 1
	clear
	echo -e "\033[31m !!! CONSOLE OUTPUT MODE !!! \033[0m"
	echo ""
	echo "Please wait..."
	sleep 2
	clear
	echo ""
	echo ""
	    if hash meteor 2>/dev/null; then
        echo "Checking if meteor is installed... DONE!"
        echo ""
        echo "Running server..."
        echo -e "\033[31m TIP : If the console does not return the prompt, press control-c ! The server will still be running.\033[0m"
        echo ""
        echo -e "\033[31m TIP : The output of the meteor server will be printed directly to the console.\033[0m"
        echo "========================================"
        echo ""
        meteor run -p=1969
    else
        echo -e "Checking if meteor is installed... \033[31mFAIL!\033[0m"
        echo ""
        echo "Please install meteor before continuing."
    fi
fi


if [ "$1" == "cpt" ]; then
	PORT=$2;
	sleep 1
	clear
	echo "Please Wait..."
	sleep 1
	clear
	echo "Run the server on port $PORT ?"
	 read -rsp $'(Press ENTER)\n' -n1 key
	 echo ""
	 echo ""
	 echo -e "\033[31mUnderstood.\033[0m"
	 sleep 1
	 clear
	 	echo ""
	    if hash meteor 2>/dev/null; then
        echo "Checking if meteor is installed... DONE!"
        echo ""
        echo "Running server with nohup..."
        echo -e "\033[31m TIP : If the console does not return the prompt, press control-c ! The server will still be running.\033[0m"
        echo ""
        echo -e "\033[31m TIP : The output of the meteor server will be printed into out.txt\033[0m"
        echo "========================================"
        echo ""
        nohup meteor run -p=$PORT > out.txt &
        echo ""
        echo -e "\033[32m == DASHBOARD SERVER STARTED ON BACKGROUND ==\033[0m"
    else
        echo -e "Checking if meteor is installed... \033[31mFAIL!\033[0m"
        echo ""
        echo "Please install meteor before continuing."
    fi
fi




if [ "$1" == "cpd" ]; then
	PORT=$2;
	sleep 1
	clear
	echo "Please Wait..."
	sleep 1
	clear
	echo "Run the server on port $PORT ?"
	 read -rsp $'(Press ENTER)\n' -n1 key
	 echo ""
	 echo ""
	 echo -e "\033[31mUnderstood.\033[0m"
	 pause 0.5
	 clear
	 	echo ""
	    if hash meteor 2>/dev/null; then
        echo "Checking if meteor is installed... DONE!"
        echo ""
        echo "Running server..."
        echo -e "\033[31m TIP : If the console does not return the prompt, press control-c ! The server will still be running.\033[0m"
        echo ""
        echo -e "\033[31m TIP : The output of the meteor server will be printed directly to the console.\033[0m"
        echo "========================================"
        echo ""
        meteor run -p=$PORT
    else
        echo -e "Checking if meteor is installed... \033[31mFAIL!\033[0m"
        echo ""
        echo "Please install meteor before continuing."
    fi
fi


