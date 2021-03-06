import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title, Text } from '../styles/elements';
import { media, mixins } from '../styles';

const LogInMain = styled.section`
    height: 100vh;
    overflow-x: hidden;
    width: 100%;

    ${media.laptop} {
        ${mixins.flexBetween}
    }

    p {
        font-size: 14px;
    }

    a {
        color: var(--primary-color);
    }
`;

const LogInForm = styled.div`
    background-color: var(--primary-color-text);
    border-radius: 20px;
    margin: -40px auto 0;
    padding: 20px 20px;
    width: 90%;

    ${media.laptop} {
        padding: 0 40px;
    }

    form {
        button {
            margin-bottom: 20px;
        }
    }
`;

const LogInFormBottom = styled.div`
    ${mixins.flexBetween}
    margin-bottom:20px;

    label,
    input[type='checkbox'] {
        margin-bottom: 0;
        margin-right: 5px;
    }
    a {
        color: var(--primary-color);
        justify-self: flex-end;
    }
`;

const Logo = styled.div`
    text-align: center;

    a {
        color: var(--primary-color);
        display: block;
        font-size: 28px;
        font-weight: 700;
        letter-spacing: 0;
        line-height: 40px;
        padding: 12px 12px 12px 0;
        text-align: center;
        text-decoration: none;
    }
`;

const LogInImage = styled.div`
    ${mixins.flexColumn}
    background-blend-mode: multiply;
    background-color: var(--primary-color);
    background-image: url('https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--primary-color-text);
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 80px 0;

    ${media.laptop} {
        height: 100%;
    }

    ul {
        li {
            ${mixins.inlineBlock}
            margin: 0 24px;

            a {
                color: var(--primary-color-text);
                font-size: 18px;

                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }
`;

function LogIn() {
    return (
        <LogInMain>
            <LogInImage>
                <Title marginBottom="20px">Discover Your Next Rental</Title>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rent">Rent</Link>
                    </li>
                    <li>
                        <Link to="/buy">Buy</Link>
                    </li>
                </ul>
            </LogInImage>
            <LogInForm>
                <Logo>
                    <Link to="/" aria-label="home">
                        RentHouse
                    </Link>
                </Logo>
                <form action="/">
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" id="userName" placeholder="Username" />
                    <label htmlFor="userName">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="on" />
                    <button type="submit">LogIn</button>
                </form>
                <div>
                    <LogInFormBottom>
                        <div>
                            <input type="checkbox" name="rememberMe" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <Link to="/">Forgot Password?</Link>
                    </LogInFormBottom>

                    <Text>
                        <span>Don’t have an account? </span>
                        <Link to="/">Sign up?</Link>
                    </Text>
                </div>
            </LogInForm>
        </LogInMain>
    );
}

export default LogIn;
