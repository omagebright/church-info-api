//This api provides an accurate data Of all the churches in Nigeria and tend to be the go to center for all the churches present in the country, hopefully it can provides data for all other countries in africa in the nearest future

//initialize npm and install and as well push to git


const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 8000

app.use(cors())

String.prototype.toProperCase = function() {
    return this.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

const api = {
    "Redeemed Christian Church Of God": {
        "Founder": "Rev Josiah Akindayomi",
        "Current senior pastor": {
            "general overseer": "Pastor Enoch Adeboye"
        },
        "Date established": "1952",
        "Location": "Lagos State"
    },
    "Living Faith Church Worldwide": {
        "Founder": "David Oyedepo",
        "Current senior pastor": {
            "general overseer": "David Oyedepo"
        },
        "Date established": "1981",
        "Location": "Ota, Ogun"
    },
    "Christ Apostolic Church": {
        "Founder": "Joseph Ayo Babalola",
        "Current senior pastor": {
            "general overseer": "Pastor S.O. Ogundare [4]"
        },
        "Date established": "1931",
        "Location": ""
    },
    "Church Of Nigeria": {
        "Founder": "Henry Townsend",
        "Current senior pastor": {
            "general overseer": "Henry Ndukuba"
        },
        "Date established": "1842",
        "Location": "Badagry"
    },
    "The African Church": {
        "Founder": "Jacob Kehinde Coker",
        "Current senior pastor": {
            "general overseer": "Emmanuel Josiah UdOfia"
        },
        "Date established": "1901",
        "Location": "Lagos"
    },
    "Christ Embassy": {
        "Founder": "Chris Oyakhilome",
        "Current senior pastor": {
            "general overseer": "Chris Oyakhilome"
        },
        "Date established": "1990",
        "Location": "Lagos State"
    },
    "Deeper Christian Life Ministry": {
        "Founder": "William Kumuyi",
        "Current senior pastor": {
            "general overseer": "William F. Kumuyi"
        },
        "Date established": "1982",
        "Location": "Lagos State"
    },
    "Cherubim And Seraphim": {
        "Founder": "Moses Orimolade Tunolase",
        "Current senior pastor": {
            "general overseer": ""
        },
        "Date established": "1925",
        "Location": ""
    },
    "Mountain Of Fire and Miracles": {
        "Founder": "Dr. Daniel Olukoya",
        "Current senior pastor": {
            "general overseer": ""
        },
        "Date established": "1989",
        "Location": "Yaba"
    },
    "The Apostolic Church Nigeria": {
        "Founder": "",
        "Current senior pastor": {
            "general overseer": "Emmanuel Segun Awojide"
        },
        "Date established": "1918",
        "Location": "Lagos State"
    },
    "The Lord's Chosen": {
        "Founder": "Lazarus Muoka",
        "Current senior pastor": {
            "general overseer": "Lazarus Muoka"
        },
        "Date established": "2002",
        "Location": "Mushin"
    },
    "Roman Catholic Church": {
        "Founder": "",
        "Current senior pastor": {
            "general overseer": "Ignatius Ayau Kaigama"
        },
        "Date established": "",
        "Location": ""
    },
    "Church Of the Lord": {
        "Founder": "Josiah Ollunowo Ositelu",
        "Current senior pastor": {
            "general overseer": ""
        },
        "Date established": "1925",
        "Location": "Ogere"
    },
    "Celestial Church Of Christ": {
        "Founder": "Samuel Biléhou Joseph OshOffa",
        "Current senior pastor": {
            "general overseer": ""
        },
        "Date established": "1947",
        "Location": "Cotonou"
    },
    "Methodist Church Nigeria": {
        "Founder": "British missionaries",
        "Current senior pastor": {
            "general overseer": "Prelate Samuel Chukwuemeka Kanu Uche, JP"
        },
        "Date established": "1842",
        "Location": "Marina/Lagos State"
    },
    "Nigerian Baptist Convention": {
        "Founder": "Southern Baptist Convention missionaries",
        "Current senior pastor": {
            "general overseer": "Rev. Samson Olasupo Ayokunle"
        },
        "Date established": "1850/1914",
        "Location": ""
    },
    "Salvation Ministries": {
        "Founder": "Pastor David Ibiyeomie",
        "Current senior pastor": {
            "general overseer": "David Ibiyeomie"
        },
        "Date established": "1997",
        "Location": "Port-Harcourt"
    },
    "Full Life Christian Centre": {
        "Founder": "Rev. Ntia I. Ntia",
        "Current senior pastor": {
            "general overseer": "Rev. Ntia I. Ntia"
        },
        "Date established": "2000",
        "Location": "Akwa Ibom State"
    },
    "Royal House Of Grace International Church": {
        "Founder": "Apostle Zilly Aggrey",
        "Current senior pastor": {
            "general overseer": "King-David Zilly Aggrey"
        },
        "Date established": "1992",
        "Location": "Port-Harcourt"
    },
    "Word Of Life Bible Church": {
        "Founder": "Ayo Oritsejafor",
        "Current senior pastor": {
            "general overseer": "Ayo Oritsejafor"
        },
        "Date established": "1987",
        "Location": "Warri"
    },
    "Assemblies Of God Church": {
        "Founder": "The Holy Spirit",
        "Current senior pastor": {
            "general overseer": "Rev. Chidi Okoroafor"
        },
        "Date established": "1934",
        "Location": "Enugu"
    },
    "Evangelical Church Winning All": {
        "Founder": "Walter Gowans, Thomas Kent, Rowland Bingham",
        "Current senior pastor": {
            "general overseer": "Rev. Dr. Stephen Panya Baba"
        },
        "Date established": "1954",
        "Location": "Jos"
    },
    "The Salvation Army": {
        "Founder": "William Booth",
        "Current senior pastor": {
            "general overseer": "Colonel Victor Leslie"
        },
        "Date established": "1920",
        "Location": "Lagos"
    },
    "Church": {
        "Founder": "unknown",
        "Current senior pastor": {
            "general overseer": "unknown"
        },
        "Date established": "unknown",
        "Location": "unknown"
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:churchName', (request, response) => {
    if (api[request.params.churchName.toProperCase()]) {
        response.json(api[request.params.churchName.toProperCase()])
    } else {
        response.json(api['Church'])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The port is open on ${PORT}. The server is working`)
})