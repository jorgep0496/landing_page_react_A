import React from 'react';

const MyCards = () => {
    let cards = [
        {
            title: "Card title 1",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            btnLabel: "Find out more!",
            cardImage: "http://placehold.it/500x325/"
        },
        {
            title: "Card title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id congue erat. Nam eu facilisis turpis.",
            btnLabel: "Find out more!",
            cardImage: "http://placehold.it/500x325/"
        },
        {
            title: "Card title 3",
            description: "In commodo urna eu arcu luctus, sed blandit est consectetur, at lacinia erat, sed id congue erat.",
            btnLabel: "Find out more!",
            cardImage: "http://placehold.it/500x325/"
        },
        {
            title: "Card title 4",
            description: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eleifend fringilla dictum Suspendisse.",
            btnLabel: "Find out more!",
            cardImage: "http://placehold.it/500x325/"
        }
    ]
    return (
        <>
            {
                cards.map((card, index) => {
                    return (
                        <div className="col-md-3" key={index}>
                            <div className="card">
                                <img src={card.cardImage} className="card-img-top"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.description}</p>
                                    <a href="#" className="btn btn-primary">{card.btnLabel}</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default MyCards;