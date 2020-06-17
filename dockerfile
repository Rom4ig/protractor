FROM rom4ikitechart/chrome_for_wdio

# создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./

RUN npm install
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# копируем исходный код
COPY . .
#RUN apt-get update
#RUN apt-get install -y libnss3-tools
#RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
#RUN apt-get update -y
#RUN apt-get check
#RUN apt-get -f install -y
#RUN apt-get install adwaita-icon-theme at-spi2-core dconf-gsettings-backend dconf-service fonts-liberation glib-networking glib-networking-common glib-networking-services -y
#RUN apt-get install gsettings-desktop-schemas libappindicator3-1 libasound2 libasound2-data libatk-bridge2.0-0 libatspi2.0-0 libauthen-sasl-perl libcolord2 libdbusmenu-glib4 libdbusmenu-gtk3-4 -y
#RUN apt-get install libdconf1 libdrm-amdgpu1 libdrm-intel1 libdrm-nouveau2 libdrm-radeon1 libdrm2 libegl1-mesa libencode-locale-perl libepoxy0 libfile-basedir-perl libfile-desktopentry-perl -y
#RUN apt-get install libfile-listing-perl libfile-mimeinfo-perl libfont-afm-perl libfontenc1 libgbm1 libgl1-mesa-dri libgl1-mesa-glx libglapi-mesa libgtk-3-0 libgtk-3-bin libgtk-3-common -y
#RUN apt-get install libhtml-form-perl libhtml-format-perl libhtml-parser-perl libhtml-tagset-perl libhtml-tree-perl libhttp-cookies-perl libhttp-daemon-perl libhttp-date-perl -y
#RUN apt-get install libhttp-message-perl libhttp-negotiate-perl libindicator3-7 libio-html-perl libio-socket-ssl-perl libipc-system-simple-perl libjson-glib-1.0-0 libjson-glib-1.0-common
#RUN apt-get install libllvm3.9 liblwp-mediatypes-perl liblwp-protocol-https-perl libmailtools-perl libnet-dbus-perl libnet-http-perl libnet-smtp-ssl-perl libnet-ssleay-perl libpciaccess0 -y
#RUN apt-get install libproxy1v5 librest-0.7-0 libsensors4 libsoup-gnome2.4-1 libsoup2.4-1 libtext-iconv-perl libtie-ixhash-perl libtimedate-perl libtxc-dxtn-s2tc liburi-perl libwayland-client0 -y
#RUN apt-get install libwayland-cursor0 libwayland-egl1-mesa libwayland-server0 libwww-perl libwww-robotrules-perl libx11-protocol-perl libx11-xcb1 libxaw7 libxcb-dri2-0 libxcb-dri3-0 -y
#RUN apt-get install libxcb-glx0 libxcb-present0 libxcb-shape0 libxcb-sync1 libxcb-xfixes0 libxft2 libxkbcommon0 libxml-parser-perl libxml-twig-perl libxml-xpathengine-perl libxmu6 libxmuu1 -y
#RUN apt-get install libxshmfence1 libxss1 libxtst6 libxv1 libxxf86dga1 libxxf86vm1 perl-openssl-defaults x11-utils x11-xserver-utils xdg-utils xkb-data -y
#RUN dpkg -i google-chrome-stable_current_amd64.deb

CMD [ "npm", "test" ]

