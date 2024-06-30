export default interface Recipe {
    id: number;
    headline: string;
    subHeadline: string;
    instructions: JSON;
    ingredients: JSON;
    image: string;
}