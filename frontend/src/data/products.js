import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.webp';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpeg';
import img12 from '../assets/images/12.webp';
import img13 from '../assets/images/13.jpg';
import img14 from '../assets/images/14.jpg';
import img15 from '../assets/images/15.avif';
import img16 from '../assets/images/16.webp';
import img17 from '../assets/images/17.jpg';
import img18 from '../assets/images/18.jpg';
import img19 from '../assets/images/19.jpg';
import img20 from '../assets/images/20.webp';
import img21 from '../assets/images/21.webp';
import img22 from '../assets/images/22.jpg';
import img23 from '../assets/images/23.jpg';
import img24 from '../assets/images/24.webp';
import img25 from '../assets/images/25.jpg';
import img26 from '../assets/images/26.avif';
import img27 from '../assets/images/27.webp';
import img28 from '../assets/images/28.jpg';
import img29 from '../assets/images/29.jpg';
import img30 from '../assets/images/30.jpg';

const products = [
    { id: 1, category: "Premium Plywood", name: "Premium Plywood", brand: "Century Ply", thickness: "25mm", price: 383, bestFor: "Luxury Furniture", image: img1 },      // ← শুধু img1, "img1" না
    { id: 2, category: "Premium Plywood", name: "High Strength Plywood", brand: "Austin Ply", thickness: "25mm", price: 322, bestFor: "Durable Work", image: img2 },
    { id: 3, category: "Block Board", name: "Block Board", brand: "Avenger", thickness: "25mm", price: 281, bestFor: "Doors/Partitions", image: img3 },
    { id: 4, category: "Door Grade", name: "Door Grade Ply", brand: "Century Ply", thickness: "32mm", price: 278, bestFor: "Main Doors", image: img4 },
    { id: 5, category: "Premium Plywood", name: "Premium Ply", brand: "Green Ply", thickness: "25mm", price: 278, bestFor: "Interiors", image: img5 },
    { id: 6, category: "Furniture Grade", name: "Furniture Grade Ply", brand: "Century Ply", thickness: "19mm", price: 275, bestFor: "Furniture", image: img6 },
    { id: 7, category: "Standard Plywood", name: "Standard Ply", brand: "Green Ply", thickness: "25mm", price: 268, bestFor: "General Use", image: img7 },
    { id: 8, category: "Block Board", name: "Block Board", brand: "Austin Ply", thickness: "25mm", price: 258, bestFor: "Structure", image: img8 },
    { id: 9, category: "Premium Plywood", name: "Classic Ply", brand: "Century Ply", thickness: "25mm", price: 244, bestFor: "Interiors", image: img9 },
    { id: 10, category: "Block Board", name: "Block Board", brand: "Century Ply", thickness: "25mm", price: 242, bestFor: "Partition", image: img10 },
    { id: 11, category: "Block Board", name: "Block Board", brand: "Green Ply", thickness: "25mm", price: 241, bestFor: "Structural", image: img11 },
    { id: 12, category: "Standard Plywood", name: "Ply Board", brand: "Century Ply", thickness: "16mm", price: 240, bestFor: "Furniture", image: img12 },
    { id: 13, category: "Block Board", name: "Block Board", brand: "Green Ply", thickness: "25mm", price: 234, bestFor: "Utility", image: img13 },
    { id: 14, category: "Standard Plywood", name: "Ply Board", brand: "Avenger", thickness: "25mm", price: 222, bestFor: "General", image: img14 },
    { id: 15, category: "Standard Plywood", name: "Ply Board", brand: "Austin Ply", thickness: "25mm", price: 220, bestFor: "Furniture", image: img15 },
    { id: 16, category: "Budget Plywood", name: "Economic Ply", brand: "Century Ply", thickness: "25mm", price: 210, bestFor: "Budget", image: img16 },
    { id: 17, category: "Block Board", name: "Block Board", brand: "Century Ply", thickness: "25mm", price: 209, bestFor: "Doors", image: img17 },
    { id: 18, category: "Door Grade", name: "Door Grade Ply", brand: "Century Ply", thickness: "30mm", price: 209, bestFor: "Doors", image: img18 },
    { id: 19, category: "Furniture Grade", name: "Ply Board", brand: "Austin Ply", thickness: "19mm", price: 204, bestFor: "Furniture", image: img19 },
    { id: 20, category: "Budget Plywood", name: "Block Board", brand: "Century Ply", thickness: "25mm", price: 200, bestFor: "Budget Work", image: img20 },
    { id: 21, category: "Block Board", name: "Block Board", brand: "Austin Ply", thickness: "25mm", price: 198, bestFor: "Structure", image: img21 },
    { id: 22, category: "Budget Plywood", name: "Ply Board", brand: "Century Ply", thickness: "25mm", price: 195, bestFor: "Utility", image: img22 },
    { id: 23, category: "Standard Plywood", name: "Ply Board", brand: "Century Ply", thickness: "12mm", price: 191, bestFor: "Light Work", image: img23 },
    { id: 24, category: "Furniture Grade", name: "Block Board", brand: "Austin Ply", thickness: "19mm", price: 190, bestFor: "Furniture", image: img24 },
    { id: 25, category: "Standard Plywood", name: "Ply Board", brand: "Austin Ply", thickness: "16mm", price: 190, bestFor: "Interior", image: img25 },
    { id: 26, category: "Block Board", name: "Block Board", brand: "Green Ply", thickness: "19mm", price: 190, bestFor: "Partition", image: img26 },
    { id: 27, category: "Budget Plywood", name: "Standard Ply", brand: "Century Ply", thickness: "25mm", price: 178, bestFor: "Budget", image: img27 },
    { id: 28, category: "Standard Plywood", name: "Ply Board", brand: "Green Ply", thickness: "19mm", price: 177, bestFor: "General", image: img28 },
    { id: 29, category: "Block Board", name: "Block Board", brand: "Green Ply", thickness: "19mm", price: 174, bestFor: "Utility", image: img29 },
    { id: 30, category: "Accessories", name: "Masking Tape", brand: "Asian Paints", thickness: "40m", price: 510, bestFor: "Painting Work", image: img30 }
];

export const categories = ["All", ...new Set(products.map(p => p.category))];

export default products;