import React from 'react';
import styled from 'styled-components';
import Editor from '../assets/Editor.png';
import Share from '../assets/share.png';
import Upcider from '../assets/upcider.png';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 40px;
`

const Section = styled.div`
    width: 250px;
    height: 320px;
    background:#fff;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &:hover img{
        transform: scale(1.1,1.1);
    }
`

const ImageContainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background:#dfdbdb;
`

const Image = styled.img`
    width: 50%;
    object-fit: fill;
    border-radius: 50%;
    object-position: center;
    height: auto;
    transform: scale(1,1);
    transition:transform 0.2s linear;
`

const Wrapper = styled.div`
    width: 100%;
    padding: 2px 20px 40px;
`
const Title = styled.a`
    font-size:15px;
    font-weight:bold;
    color:#333;
    display: inline-block;
    text-transform:uppercase;
    transition: all 0.3s ease 0s;
    &:hover{
       text-decoration: none;
       color:#3498db;
    }
`

const Text = styled.p`
    color:#808080;
    text-overflow: ellipsis;
`

const ItemLink = styled.a`

    float: right;
    font-size: 14px;
    color: #2196F3;
    cursor: pointer;

    &:hover{
        text-decoration:none;
        color:#85c6f1;
    }
`


const FeaturedProducts = () => {
    return (
        <Container>
            <Section>
                <ImageContainer>
                    <Image src={Share} alt="file-share"/>
                </ImageContainer>
                <Wrapper >
                    <Title>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Title>
                    <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore expedita sapiente impedit neque aperiam veritatis veniam quos officia repudiandae fuga.
                    </Text>
                    <ItemLink>
                      Learn more &raquo;
                    </ItemLink>
                </Wrapper>
                
            </Section>

            <Section>
                <ImageContainer>
                    <Image src={Upcider} alt="freelance-marketplace"/>
                </ImageContainer>
                <Wrapper >
                    <Title>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Title>
                    <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore expedita sapiente impedit neque aperiam veritatis veniam quos officia repudiandae fuga.
                    </Text>
                    <ItemLink>
                      Learn more &raquo;
                    </ItemLink>
                </Wrapper>
            </Section>

            <Section>
                <ImageContainer>
                    <Image src={Editor} alt="web-editor"/>
                </ImageContainer>
                <Wrapper >
                    <Title>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Title>
                    <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore expedita sapiente impedit neque aperiam veritatis veniam quos officia repudiandae fuga.
                    </Text>
                    <ItemLink>
                      Learn more &raquo;
                    </ItemLink>
                </Wrapper>
            </Section>
        </Container>
    );
}

export default FeaturedProducts;
