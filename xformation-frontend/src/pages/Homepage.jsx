import React, { useState } from 'react';

import '../sass/pages/Homepage.scss';

const Homepage = () => {

    return (
        <div className={"container-wrapper"}>
            <section className={"text"}>
                <h1>Personalize your <span className={"tag"}>experience</span> !</h1>
                <p>Check our <span className="services">services</span> by navigate into the main menu.</p>
            </section>
            <section className={"images"}>
            </section>
        </div>
    )
};

export default Homepage;