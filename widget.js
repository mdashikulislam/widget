document.addEventListener('DOMContentLoaded', async function() {
    appendWidget();
   var myIp = await getIpAddress();
   await processStart(myIp);
    setInterval(async function (){
        if (document.visibilityState === 'visible') {
            await processStart(myIp);
        }
    }, 6000);
});

async function processStart(myIp){
    let location;
    var user = await randomUser();
    if (validateIPv4(myIp)) {
        location = await getCityByIP(myIp);
    }else{
        location = randomCity();
    }
    createUserCard(user,location);
}
function createUserCard(user,location){
    let html = `<a href="" class="bind939878GeneralClickSocialProof" onclick="void(0)">
                            <div class="bind3938_bindSocialProofPreviewPicture">
                                <img src="${user.picture.thumbnail}" alt="" id="bind3938_bindSocialProofPreviewPictureSrc" />
                            </div>
                        </a>
                        <div class="bind3938_bindSocialProofPreviewContent">
                            <a href="#" class="bind939878GeneralClickSocialProof" onclick="void(0)">
                                <div id="bind3938_bindSocialProofPreviewTitle" class="bind3938_bindSocialProofPreviewTitle">${user.name.first} from ${location.city}, ${location.country}</div>
                                <div id="bind3938_bindSocialProofDescription" class="bind3938_bindSocialProofDescription">Just started a trial on our website</div>
                            </a>
                            <div class="bind3938_bindSocialProofPreviewLocation">
                                <span id="bind3938_bindSocialProofTimestamp" class="bind3938_bindSocialProofTimestamp">${getTimeDifference()}</span>
                        
                                <a href="#" onclick="void(0)" id="bind3938_SocialProofActiveExternalLink" title="" target="_blank" style="display: inline-block;">
                                    <span class="bind3938_bindSocialProofPreviewVerified">
                                        <span class="social-proof-fa-check-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px" viewBox="0 0 20 21" version="1.1">
                                                <title>socialProofCheck</title>
                                                <desc>Created with Sketch.</desc>
                                                <defs></defs>
                                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="socialProofCheck" fill-rule="nonzero">
                                                        <path
                                                            d="M20,11 C20,16.523 15.523,21 10,21 C9.48255794,21 8.97429436,20.9607001 8.47803155,20.884922 C3.67754625,20.1519 0,16.0055392 0,11 C0,5.4772 4.4772,1 10,1 C15.523,1 20,5.4772 20,11 Z"
                                                            id="Shape"
                                                            fill="#0382E5"
                                                        ></path>
                                                        <path d="M20,10 C20,15.523 15.523,20 10,20 C4.4772,20 0,15.523 0,10 C0,4.4772 4.4772,0 10,0 C15.523,0 20,4.4772 20,10 Z" id="Shape" fill="#008FFF"></path>
                                                        <polygon id="Shape" fill="#077EDA" points="14 7 8 13 5.5 10.5 3.375 12.6 5.875 15.1 7.875 17.1 8 17.2 16.125 9.1"></polygon>
                                                        <polygon id="Shape" fill="#ECF0F1" points="14 6 8 12 5.5 9.5 3.375 11.6 5.875 14.1 7.875 16.1 8 16.2 16.125 8.1"></polygon>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span id="bind3938_bindSocialProofPreviewVerifiedText">Verified</span>
                                    </span>
                                </a>
                            </div>
                        </div>`;
    const element = document.getElementById("bind9383GeneralSocialProof");
    element.innerHTML = "";
    element.innerHTML = html;
    element.classList.remove('bind38373__fadeOutDown');
    element.style.display = 'block';
    setTimeout(() => {
        element.classList.add('bind38373__fadeOutDown');
    }, 3000);
}
function appendWidget(city) {
    if (!document.querySelector('#wrapperAllSocialProof3837333')) {
        // Create the wrapper element
        const wrapperElement = document.createElement('div');
        wrapperElement.id = 'wrapperAllSocialProof3837333';

        // Add the style inside a <style> tag
        const style = document.createElement('style');
        style.innerHTML = `.bind3938_alertSocialProofPreview {
            position:fixed;
            left:10px;
            bottom:20px;
            border: 1px solid #ddd;
            background-color: #fff;
            padding: 15px 15px 15px 15px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border-radius: 10px;
            width:360px;
            margin: 10px 0px 10px 20px;
            font-family: 'Proxima Nova', sans-serif;
            box-shadow: 10px 20px 40px 0 rgba(36,35,40,.1);
            display:none;
            z-index:9999999999;
        }

        .wrapperAllSocialProof3837333 {
            z-index:9999999999;
            position:relative;
        }

        .bind3938383NoLinkCss {
            cursor:default!important;
        }

        .bind3938_bindSocialProofPreviewTitle, .bind3938_bindSocialProofDescription, .bind3938_bindSocialProofPreviewLocation {
            float:left;
            width: 100%;
            font-family: 'Proxima Nova', sans-serif;
            text-align:left;
        }

        .bind3938_bindSocialProofPreviewPicture {
            float:left;
            margin-right:20px;
        }

        .bind3938_bindSocialProofPreviewContent {
            width:250px;
            float:left;
        }
        .bind3938_bindSocialProofPreviewTitle {
            font-weight: bold;
            font-size: 16px;
            color:#444!important;
            min-height:22px!important;
        }

        .bind3938_bindSocialProofDescription {
            font-weight: 200;
            color: #47525d;
            font-size:13px;
            min-height:18px!important;
            line-height:16px!important;
        }
        .bind3938_bindSocialProofPreviewLocation {
            font-weight: 200;
            font-size:12px;
            color: #47525d;
            height:18px;
        }

        .bind3938_bindSocialProofPreviewVerified {
            color:#008fff;
            margin-left: 10px;
            font-size:12px!important;
        }

        #bind3938_bindSocialProofPreviewVerifiedText {
            display:inline-block!important;
            font-family: 'Proxima Nova', sans-serif;
            text-align:left;
        }

        .bind3938_alertSocialProofPreview a {
            text-decoration:none!important;
        }

        .bind3938_alertSocialProofPreview span.social-proof-fa-check-circle {

            width:15px;
            height:15px;
            display:inline-block;
            background-size:100% 100%;
            background-repeat:no-repeat;
            margin: 4px 5px -4px 0px;

        }

        .bind3938_alertSocialProofPreview span.social-proof-fa-check-circle svg {
            float: left;
            margin: -1px 0px 0px 0px;
        }

        .bind3938_bindSocialProofPreviewPicture img {
            width: 50px;
            height: 50px;
            margin-top: 4px;
            margin-left: 4px;
            border-radius: 100%;
        }

        .bind3938_socialProofForceRight, .bind3938_bindSocialProofForceToRight {
            left:inherit!important;
            right:20px!important;
        }

        #bind3938_bindSocialProofTimestamp, #bind3938_SocialProofActiveExternalLink {
            height:15px!important;
            line-height:25px!important;
        }

        @-webkit-keyframes bind38373__slideInUp {
            from {
                -webkit-transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0);
                visibility: visible;
            }

            to {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
        }

        @keyframes bind38373__slideInUp {
            from {
                -webkit-transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0);
                visibility: visible;
            }

            to {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
        }

        .bind38373__slideInUp {
            -webkit-animation-name: bind38373__slideInUp;
            animation-name: bind38373__slideInUp;
        }

        .bind38373__animated {
            -webkit-animation-duration: 0.6s;
            animation-duration: 0.6s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
        }

        @-webkit-keyframes bind38373__fadeOutDown {
            from {
                opacity: 1;
            }

            to {
                opacity: 0;
                -webkit-transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0);
            }
        }

        @keyframes bind38373__fadeOutDown {
            from {
                opacity: 1;
            }

            to {
                opacity: 0;
                -webkit-transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0);
            }
        }

        .bind38373__fadeOutDown {
            -webkit-animation-name: bind38373__fadeOutDown;
            animation-name: bind38373__fadeOutDown;
        }

        @media (min-width: 481px) and (max-width: 767px) {

            .bind3938_bindSocialProofHideMobile {
                display:none!important;
            }

        }

        @media (min-width: 320px) and (max-width: 480px) {

            .bind3938_bindSocialProofHideMobile {
                display:none!important;
            }

        }

        @media (min-width: 481px) and (max-width: 767px) {

            .bind3938_bindSocialProofShowTopPageMobile {
                bottom:inherit!important;
                top:10px!important;
            }

        }

        @media (min-width: 320px) and (max-width: 480px) {

            .bind3938_bindSocialProofShowTopPageMobile {
                bottom:inherit!important;
                top:10px!important;
            }
        }`;
        document.head.appendChild(style);
            wrapperElement.innerHTML = `<div id="bind9383GeneralSocialProof" class="bind38373__slideInUp bind38373__animated bind3938_alertSocialProofPreview " style="display: none;">
            </div>`;
        document.body.appendChild(wrapperElement);
    }
}
async function randomUser() {
    try {
        const response = await fetch("https://randomuser.me/api");
        const data = await response.json();
        return data?.results[0];
    } catch (error) {
        return "";
    }
}
async function getIpAddress() {
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        return data?.ip || "";
    } catch (error) {
        return "";
    }
}
async function getCityByIP(ip) {
    const token = randomToken();
    const apiUrl = `https://ipinfo.io/${ip}/json?token=${token}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch IP information');
        return await response.json();
    } catch (error) {
        return null;
    }
}
function validateIPv4(ip) {
    if (!ip || ip.trim() === "") {
        return false;
    }
    const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;
    return ipv4Pattern.test(ip);
}
function randomCity(){
    const cities = [
        "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
        "Austin", "Jacksonville", "Fort Worth", "Columbus", "Indianapolis", "Charlotte", "San Francisco", "Seattle", "Denver", "Washington",
        "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore",
        "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Kansas City", "Long Beach", "Mesa", "Atlanta", "Colorado Springs",
        "Virginia Beach", "Raleigh", "Omaha", "Miami", "Oakland", "Minneapolis", "Tulsa", "Bakersfield", "Cleveland", "Tampa",
        "Anaheim", "Honolulu", "Riverside", "Corpus Christi", "Lexington", "Stockton", "St. Louis", "Pittsburgh", "St. Paul", "Cincinnati",
        "Anchorage", "Henderson", "Greensboro", "Plano", "Newark", "Lincoln", "Toledo", "Jersey City", "Chula Vista", "Buffalo",
        "Fort Wayne", "Chandler", "St. Petersburg", "Laredo", "Durham", "Irvine", "Madison", "Gilbert", "Norfolk", "Winston-Salem",
        "Glendale", "Hialeah", "Garland", "Reno", "Chesapeake", "Irving", "Scottsdale", "North Las Vegas", "Fremont", "Boise",
        "Baton Rouge", "Richmond", "Spokane", "Des Moines", "Modesto", "Fargo", "Tacoma", "Santa Clarita", "Birmingham", "Arlington",
        "San Bernardino", "Macon", "Akron", "Columbia", "Oxnard", "Fontana", "Yonkers", "Augusta", "Huntington Beach", "Grand Rapids",
        "Salt Lake City", "Amarillo", "Huntsville", "Glendale", "Knoxville", "Newport News", "Mobile", "Brownsville", "Overland Park",
        "Tempe", "Cape Coral", "McKinney", "Shreveport", "Frisco", "Amarillo", "Thousand Oaks", "Visalia", "Springfield", "Bellevue",
        "Pembroke Pines", "Sioux Falls", "East Los Angeles", "Billings", "West Valley City", "Erie", "Gresham", "West Jordan", "Waco",
        "Carrollton", "McAllen", "Round Rock", "Clearwater", "Waterbury", "Lancaster", "West Palm Beach", "Peoria", "Topeka", "Dayton",
        "Santa Rosa", "Eugene", "Fort Collins", "Downey", "Elk Grove", "Simi Valley", "Cary", "New Haven", "Burbank", "Green Bay",
        "Columbia", "Manchester", "Murfreesboro", "Beaumont", "Independence", "Lansing", "Fargo", "Clovis", "Arvada", "Wilmington",
        "Bend", "Vancouver", "Charleston", "Lakewood", "Antioch", "Richardson", "Billings", "Fayetteville", "Costa Mesa", "Bakersfield",
        "Miami Gardens", "Greenwood", "Hendersonville", "Redwood City", "Edison", "Champaign", "Lynchburg", "Grand Prairie", "Rockford",
        "Killeen", "Macon", "Nampa", "Tuscaloosa", "Lancaster", "Springfield", "Orem", "Bismarck", "Kenosha", "Madison",
        "Pueblo", "Cedar Rapids", "Lafayette", "Waterloo", "Bismarck", "La Crosse", "Peoria", "Joplin", "Cary", "Mansfield",
        "Anderson", "Jackson", "Saint Charles", "Trenton", "Lauderhill", "Montgomery", "Gulfport", "Gloucester", "Hickory", "Augusta",
        "Rock Hill", "Cheyenne", "Bloomington", "Champaign", "Saginaw", "Charleston", "Toledo", "Shreveport", "Auburn", "Salina"
    ];
    return cities[Math.floor(Math.random() * cities.length)];
}
function getTimeDifference() {
    const timeRanges = [
        "1 hour ago",
        "2 hours ago",
        "3 hours ago",
        "4 hours ago",
        "5 hours ago",
        "6 hours ago"
    ];
    const randomIndex = Math.floor(Math.random() * timeRanges.length);
    return timeRanges[randomIndex];
}
function randomToken(){
    const token = [
        '1e8b6ba031d4e9',
        '2afdeeeba75803',
        'e1c8999562d3c7',
        'a8f63224709c8b',
        '51a670a7b50b57'
    ]
    const randomIndex = Math.floor(Math.random() * token.length);
    return token[randomIndex];
}
