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

* [![React][React.js]][React-url =20x20]
* [![Spring][Spring.io]][Spring-url =20x20] 
* [![Mapbox][Mapbox.com]][Mapbox-url =20x20]
* [![Discourse][Discourse.org]][Discourse-url =20x20]
* [![MODNR-GIS][Gis-Modrn.com]][Modrn-url =20x20]
* [![Auth-0][Auth0.com]](https://cdn.freebiesupply.com/logos/large/2x/auth0-logo-png-transparent.png =20x20)

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
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Spring.io]: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8q7zCDdAu9M-2mj52kGE-e8jHEVqb3OeQwF34i-PMQ&s
[Spring-url]: https://spring.io/projects/spring-boot/
[Mapbox.com]: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mapbox_logo_2019.svg/1280px-Mapbox_logo_2019.svg.png
[Mapbox-url]: https://www.mapbox.com/
[Discourse.org]: https://avatars.githubusercontent.com/u/3220138?s=200&v=4
[Discourse-url]: https://www.discourse.org/plugins/github.html
[Gis-Modrn.com]: data:image/png;base64,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
[Modrn-url]: https://gis-modnr.opendata.arcgis.com/datasets/modnr::state-park-locations/explore?location=38.415037%2C-90.259088%2C8.00
[Auth0.com]: https://cdn.freebiesupply.com/logos/large/2x/auth0-logo-png-transparent.png 
[Auth0-url]: https://auth0.com/docs
[product-screenshot]: ./databases/images/edit%20hike%20trip.JPG