import React from 'react';
import data from '../assets/json/properties.json';
import { CardsList } from '../components';
import { Wrapper } from '../styles/elements';

function Rent() {
    return (
        <section>
            <Wrapper>
                <CardsList data={data[0]} />
            </Wrapper>
        </section>
    );
}

export default Rent;
