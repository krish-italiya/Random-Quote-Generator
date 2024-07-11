import { useState } from 'react'
import '../App.css'
import '../btn.scss'

const GetQuotes = () => {

    const [quote, setQuote] = useState({ text: "The difference between a saint and a hypocrite is that one lies for his religion, the other by it.", author: "Minna Antrim" })


    const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6d59a42fd5msh0cff884c24d3b27p1f0452jsn5f13d9302d4b',
            'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
        }
    };
    const getQuote = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json()
            console.log(result[0]);
            setQuote(result[0])
        } catch (error) {
            console.error(error);
        }
    }
    const handleClick = (e) => {
        e.preventDefault();
        getQuote()
    }

    function createRipple(event) {
        var ripple = document.createElement('span');
        ripple.classList.add('ripple');
        var max = Math.max(this.offsetWidth, this.offsetHeight);

        ripple.style.width = ripple.style.height = max * 2 + 'px';

        var rect = this.getBoundingClientRect();

        ripple.style.left = event.clientX - rect.left - max + 'px';
        ripple.style.top = event.clientY - rect.top - max + 'px';

        this.appendChild(ripple);

    }

    const handleBackground = () => {
        const rootEl = document.querySelector('.container')
        const quote = document.querySelector('.quote-card')
        const quoteText = document.querySelector('.quote-text')
        const heading = document.querySelector('.heading')
        const author = document.querySelector('.author')
        const nbtn = document.querySelectorAll('.r-btn')
        console.log(nbtn)
        const palettes = [{ mainBg: '#C499F3', cardBg: '#7360DF', fontColor: '#F2AFEF' }, { mainBg: "#596FB7", cardBg: '#C6CF9B', fontColor: '#11235A' }, { mainBg: '#B6BBC4', cardBg: '#31304D', fontColor: "#F0ECE5" }, { mainBg: '#E48F45', cardBg: "#F5CCA0", fontColor: '#6B240C' }, { mainBg: "#ED9ED6", cardBg: "#7071E8", fontColor: "#FFC7C7" }, { mainBg: "#F1EB90", cardBg: "#EC8F5E", fontColor: "#F1EB90" }, { mainBg: "#89CFF3", cardBg: "#00A9FF", fontColor: "#CDF5FD" }, { mainBg: "#7752FE", cardBg: "#C2D9FF", fontColor: "#190482" }, { mainBg: "#CDFAD5", cardBg: "#F6FDC3", fontColor: "#FF8080" }, { mainBg: "#BCA37F", cardBg: "#FFF2D8", fontColor: "#113946" }, { mainBg: "#7C81AD", cardBg: "#E5C3A6", fontColor: "#2E4374" }, { mainBg: "#088395", cardBg: "#F2F7A1", fontColor: "#071952" }]
        const id = Math.floor(Math.random() * palettes.length);
        rootEl.style.backgroundColor = palettes[id].mainBg
        quote.style.backgroundColor = palettes[id].cardBg
        quoteText.style.color = palettes[id].fontColor
        author.style.color = palettes[id].fontColor
        heading.style.color = palettes[id].cardBg
        nbtn.forEach(rbtn => {
            rbtn.addEventListener('click', createRipple)
            rbtn.style.color = palettes[id].fontColor
        })

    }
    return (
        <>
            <div className="container" style={{ height: "100vh", width: "100%", backgroundColor: "#596FB7", color: "white", display: "flex", flexDirection: "Column", alignItems: "center", justifyContent: "space-evenly" }}>
                <h1 className='heading'>Get A Quote Which Suits You :)</h1>
                <div className='quote-card' style={{ height: "40%", width: "30%", backgroundColor: "#A3B763", color: "black", padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "15% 30%", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <div className='quote-text' style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "400", height: "80%" }}>
                        <span style={{ fontSize: "100px" }} >&ldquo;</span>
                        <span style={{ fontSize: "21px" }}>{quote.text}</span>
                    </div>
                    <span className='author' style={{ color: 'white', fontWeight: "200", textAlign: 'center', width: "100%" }}>-{quote.author}</span>
                    <div>
                        <button className="r-btn" style={{ padding: "10px" }} onClick={handleClick}>Get New Quote</button>
                        <button className="r-btn" style={{ padding: "10px" }} onClick={handleBackground}>Change Background</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GetQuotes
