<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="/front_end/public/android-chrome-192x192.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Trailblazer README</h3>

  <p align="center">
    Instructions for uploading databases of geolocations, plants, animals to MySQl to run web page for demonstrations on a local enviroment.
    <br />
    <a href="https://github.com/dustinFriesenDev/Trailblazers"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/dustinFriesenDev/Trailblazers/issues">Report Bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/dustinFriesenDev/Trailblazers)

Trailblazers is a capstone project for LaunchCode Bootcamp based out of St. Louis, MO. 

Description:
The app Trailblazers enables users to discover Missouri’s 90 state parks and historical sites, allowing them to reconnect with nature as well as history. Trailblazers provides information on parks locations, weather, and local plants and animals. A user can also keep record of their trips, log the wildlife they saw along the way, and share their experiences with a Trailblazers’ forum.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* <a href="https://reactjs.org/" background-color="black" width="auto" height="20"><img src="https://rlemasquerier.github.io/react.svg" alt="React logo" width="20" height="20">React</a>
* [![Spring][Spring.io]][Spring-url] 
* [![Mapbox][Mapbox.com]][Mapbox-url]
* [![Discourse][Discourse.org]][Discourse-url]
* [![MODNR-GIS][Gis-Modrn.com]][Modrn-url]
* [![Auth-0][Auth0.com]][Auth0-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

You can clone the project or you can fork the project. You'll need to run npm start, import to csv files to a relational-database, and possible initiate the forum. Instructions for the forum will come at a later time.

### Prerequisites

Run *npm to install all dependencies locally.
  ```sh
  npm install 
  ```
MySQL server running.

### Installation

1. Fork or Clone repo (Clone will be used in README)
2. Clone the repo
   ```sh
   git clone https://github.com/dustinFriesenDev/Trailblazers
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run backend (IntelliJ is used in the README) to generate tables and fields.
5. Open MySQL.
6. (Right-Click on Windows mouse) Table Data Import Wizard.
7. Browse to "database" directory at root of the project.
8. Select csv file matching table information.
9. Verify Field names match.
10. Import.
11. Repeat steps 6 - 10 for plants, animals, and geolocations
12. Run frontend (VSCode was used)
    ```sh
    npm start
    ```
13. Navigate to localhost:3000

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

This web applicaiton is used to record trips a user have been on to Missouri state parks and historical sites. User can track the plants and animals they found along the way. 

To record a trip, the user has to sign-in. 

Without signing-in a user still has access to park weather, park locations, and able to view local plants and animals.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

"All Rigth Reserved"

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Dustin Friesen - [@LinkedIn](https://www.linkedin.com/in/dustin-friesen/) - https://www.linkedin.com/in/dustin-friesen/

Project Link: [https://github.com/dustinFriesenDev/Trailblazers](https://github.com/dustinFriesenDev/Trailblazers)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Members of the Trailblazer Team
* [Nichole O'Neal](https://github.com/nichole-o)
* [Braden Evans](https://github.com/bradene0)
* [Mohammed Abdel-Moomen](https://github.com/Mohammed0704)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: 
[React-url]: 
[Spring.io]: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8q7zCDdAu9M-2mj52kGE-e8jHEVqb3OeQwF34i-PMQ&s
[Spring-url]: https://spring.io/projects/spring-boot/
[Mapbox.com]: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mapbox_logo_2019.svg/1280px-Mapbox_logo_2019.svg.png
[Mapbox-url]: https://www.mapbox.com/
[Discourse.org]: https://avatars.githubusercontent.com/u/3220138?s=200&v=4
[Discourse-url]: https://www.discourse.org/plugins/github.html
[Gis-Modrn.com]: https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/MODeptNaturalResources.png
[Modrn-url]: https://gis-modnr.opendata.arcgis.com/datasets/modnr::state-park-locations/explore?location=38.415037%2C-90.259088%2C8.00
[Auth0.com]: https://cdn.freebiesupply.com/logos/large/2x/auth0-logo-png-transparent.png 
[Auth0-url]: https://auth0.com/docs
[product-screenshot]: ./databases/images/edit%20hike%20trip.JPG