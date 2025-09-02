import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <footer>
            <Container>
                <a href="https://github.com/Garv0706" target='blank'>
                    <p>Garv Malhotra</p>
                    <img src={process.env.PUBLIC_URL + '/icons/github-32.png'} alt="git-hub" />
                </a>
            </Container>
        </footer>
    )
}

export default Footer;

const Container = styled.div`
    & a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: black;
        & img{
            width: 25px;
            margin-left: 10px;
        }
    }
`
