Colors Lab

A website where users can sign in to their own account and add colors to their profile list. Users can also search for colors within their profile list 

Technologies used includes DigitalOcean for website hosting, MYSQL for database work, PuTTY FTP for API development, and Arc for API testing (Optional)

Set up a LAMP server
Have Linux, Apache, MySQL, and PHP installed on your computer or on a cloud server (DigitalOcean)
The web files need to go in the web root folder (usually /var/www/html)

Create the database
Make a database called COP4331
Add the tables: Users, Colors, and Contacts

Create a database user with the right permissions and update the PHP API files in LAMPAPI/ with the correct login info

In the web root folder, make these directories:
css/
images/
js/
LAMPAPI/

Put the frontend stuff (index.html, color.html, CSS, JS, images) in the right folders
Put the backend PHP files (Login.php, AddColor.php, SearchColors.php) inside LAMPAPI/

Connect the API
Make sure the MySQL credentials in each PHP file match your database

Run the Application by searching the IP address given for your server while running or connecting a domain 

Assumes a running server to be working
Limitations include a weak hash and weak security features due to the simplicity of the project
No Ai usage for the code
