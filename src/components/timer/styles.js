import styled from "styled-components";



export const StyledTimer = styled.div`

    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-family: "Clock";

    .title{
        z-index: 2;
        color: #707c8b;
        
        font-size: 28px;
        position: absolute;
        top: 50px;
    }

    .links{
        z-index: 2;
        color: #707c8b;
        font-size: 48px;
        position: absolute;
        bottom: 110px;
        font-weight: 800;
        transition: 0.3s ease-in-out;
        a {
            text-decoration: none;
            color: inherit;
        }
        :hover{
            color: white;
            filter: drop-shadow(2px 2px 20px #22E3A8);
        }
    }

    img{
        filter: drop-shadow(0 2mm 4mm #000);
    }
    .wrapper{
        margin-top: -660px;
        gap: 330px;
        position: absolute;
        flex-direction: row-reverse;
    }

    .start-img{
        transition: 0.3s ease-in-out;
        transform: rotate(45deg);
    }

    .clear-img{
        transition: 0.3s ease-in-out;
        transform: rotate(-45deg);
    }

    .start-img:hover, .clear-img:hover{
        
        filter: drop-shadow(2px 2px 5px #22E3A8);
    }

    a{
        cursor: pointer;
        p{
            pointer-events: none
        }
    }

    a.start-btn.clicked img, a.clear-btn.clicked img {
        animation: button-clicked 0.3s ease-out;
    }

    @keyframes button-clicked {
        0% { margin: 0 }
        50% { margin-top: 10px; margin-right: 10px; }
        100% { margin: 0 }
    }


    .btn-txt{
        position: absolute;
        width: 100px;
        font-size: 35px;
        color: #22E3A8;
        filter: drop-shadow(2px 2px 5px #22E3A8);
    }

    .start{
        transform:  rotate(45deg);
        margin: -55px 0 0 53px;
    }

    .clear{
        transform:  rotate(-45deg);
        margin: -70px 0 0 58px;
    }

    .timer{
        transition: 0.3s ease-in-out;
        margin-top: -100px;
        position: absolute;
        font-size: 120px;
        color: #22E3A8;
        filter: drop-shadow(2px 2px 5px #22E3A8);
    }


    .background{
        width: 600px;
        height: 600px;
        border-radius: 40%;
        background: #22E3A8;
        z-index: -99;
        position: absolute;
    }

    @media (max-width: 750px) {
        transform: translate(-50%, -50%) scale(0.7);
    }
    @media (max-width: 550px) {
        transform: translate(-50%, -50%) scale(0.6);
    }
    @media (max-width: 455px) {
        transform: translate(-50%, -50%) scale(0.5);
    }
    @media (max-width: 375px) {
        transform: translate(-50%, -50%) scale(0.4);
    }
`