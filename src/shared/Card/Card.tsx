import './card.css';

type CardProps = {
    imgSrc: string;
    name: string;
    children?: React.ReactNode;
}
export const Card = ({ imgSrc, name, children }: CardProps) => {

    return (
        <div className="card">
            <img src={imgSrc} alt="pokemon" />
            <div className="container">
                <h2><b>{name}</b></h2>
                <div>{children}</div>
            </div>
        </div>
    )
}