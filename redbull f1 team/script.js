const listFormat = document.getElementById("order-format");
const listFieldset = document.getElementById("list-fieldset");
const sportSpan = document.getElementById("team-sport");
const foundedSpan = document.getElementById("team-founded");
const bossSpan = document.getElementById("team-boss");

const redbullTeam = {
    sport: "Formula 1",
    founded: "2005",
    teamBoss: "Christian Horner",
    drivers: [
        {
            name: "David Coulthard",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-24_g7ds.jpg",
            years: "2005-2008",
            isChampion: false,
            isWinner: false,
            webLink: "https://f1.fandom.com/wiki/David_Coulthard",
            isRetired: true,
        },
        {
            name: "Christian Klien",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-26_03dg.jpg",
            years: "2005-2006",
            isChampion: false,
            isWinner: false,
            webLink: "https://f1.fandom.com/wiki/Christian_Klien",
            isRetired: true,
        },
        {
            name: "Vitantonio Liuzzi",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-27_ag8a.jpg",
            years: "2005",
            isChampion: false,
            isWinner: false,
            webLink: "https://f1.fandom.com/wiki/Vitantonio_Liuzzi",
            isRetired: true,
        },
        {
            name: "Robert Doornbos",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-28_zsj8.jpg",
            years: "2006",
            isChampion: false,
            isWinner: false,
            webLink: "https://f1.fandom.com/wiki/Robert_Doornbos",
            isRetired: true,
        },
        {
            name: "Mark Webber",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-29_tqsn.jpg",
            years: "2007-2013",
            isChampion: false,
            isWinner: true,
            webLink: "https://f1.fandom.com/wiki/Mark_Webber",
            isRetired: true,
        },
        {
            name: "Sebastian Vettel",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-30_jkfd.jpg",
            years: "2009-2014",
            isChampion: true,
            isWinner: true,
            webLink: "https://f1.fandom.com/wiki/Sebastian_Vettel",
            isRetired: true,
        },
        {
            name: "Daniel Ricciardo",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-31_yz7q.jpg",
            years: "2014-2018",
            isChampion: false,
            isWinner: true,
            webLink: "https://f1.fandom.com/wiki/Daniel_Ricciardo",
            isRetired: true,
        },
        {
            name: "Daniil Kvyat",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-32_axz6.jpg",
            years: "2015-2016",
            isChampion: false,
            isWinner: false,
            webLink: "https://f1.fandom.com/wiki/Daniil_Kvyat",
            isRetired: true,
        },
        {
            name: "Max Verstappen",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-33_j16g.jpg",
            years: "2016-now",
            isChampion: true,
            isWinner: true,
            webLink: "https://f1.fandom.com/wiki/Max_Verstappen",
            isRetired: false,
        },
        {
            name: "Pierre Gasly",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-34_36d3.jpg",
            years: "2019",
            isChampion: false,
            isWinner: false,
            webLink: "https://f1.fandom.com/wiki/Pierre_Gasly",
            isRetired: false,
        },
        {
            name: "Alexander Albon",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-35_lduh.jpg",
            years: "2019-2020",
            isChampion: false,
            isWinner: false,
            webLink: "https://f1.fandom.com/wiki/Alexander_Albon",
            isRetired: false,
        },
        {
            name: "Sergio Perez",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-36_x86z.jpg",
            years: "2021-2024",
            isChampion: false,
            isWinner: true,
            webLink: "https://f1.fandom.com/wiki/Sergio_P%C3%A9rez",
            isRetired: true,
        },
        {
            name: "Liam Lawson",
            imgSrc: "https://s6.uupload.ir/files/msg-10011895964-37_xpdr.jpg",
            years: "now",
            isChampion: false,
            isWinner: false,
            webLink: "https://f1.fandom.com/wiki/Liam_Lawson",
            isRetired: false,
        },
    ],
}

Object.freeze(redbullTeam);
const { sport, founded, teamBoss, drivers } = redbullTeam;
const { name, imgSrc, years, isChampion, isWinner, webLink, isRetired } = redbullTeam.drivers;

sportSpan.textContent = sport;
foundedSpan.textContent = founded;
bossSpan.textContent = teamBoss;

const sortDriverCards = (parameter = drivers) => {
    listFieldset.innerHTML += parameter.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
           return 1;
        }
        return 0;
    }).map(
        ({name, imgSrc, years, webLink}) => {
            return `
          <a href=${webLink}>
            <div id="driver-card">
              <img src=${imgSrc} />
              <p>${name}</p>
              <p>${years}</p>
            </div>
          </a>
        `
        }
    ).join("")
}


listFormat.addEventListener("change", (e) => {
    listFieldset.innerHTML = "";

   switch (e.target.value) {
    case "champions":
        sortDriverCards(drivers.filter((driver) => driver.isChampion !== false));
        break;
        case "retired":
            sortDriverCards(drivers.filter((driver) => driver.isRetired !== false));
            break;
            case "winners":
                sortDriverCards(drivers.filter((driver) => driver.isWinner !== false));
                break;
                default:
                    sortDriverCards();
   }
});

sortDriverCards()