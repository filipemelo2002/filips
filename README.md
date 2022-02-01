## Getting Started
Run `blade gw initBundle` to automatically download Liferay v7.4 or simply download and unzip it manually under the `/bundles` directory
### Database Setup
In this project, I decided to use PostgreSQL, but you can set up any database you want (MySQL, MariaDB, etc.)
Add the following lines to your `bundles/portal-ext.properties` file:
```properties
jdbc.default.driverClassName=org.postgresql.Driver
jdbc.default.url=jdbc:postgresql://localhost:5432/lportal
jdbc.default.username=postgres
jdbc.default.password=
```
_Obs.: Remember to create a database called `lportal`_