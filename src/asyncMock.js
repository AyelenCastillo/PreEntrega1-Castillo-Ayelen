const products = [
    { id: "1", 
    name: "Excellent Smart Formula Perro Adulto 20 Kg", 
    img: "https://catycanar.vtexassets.com/arquivos/ids/170439-800-auto?v=638355621661670000&width=800&height=auto&aspect=true", 
    price: 25.189, 
    category: "alimento para perros", 
    description: "Excellent Formula Smart es un alimento con ingredientes de alta calidad que proporciona los nutrientes fundamentales para satisfacer todas las necesidades nutricionales de tu mascota. Para adultos desde los 12 meses de edad en adelante, ayuda a mantener los músculos fuertes. Los ácidos grasos Omega 3 y 6 aportan elasticidad a la piel y favorecen a un pelo sano y brillante.",
    age: "Adulto",
    size:"Chico / Mediano / Grande / Gigante",
    brand:"Purina Excellent",
    weigth:"20 kg",
    med: "No",
    stock: 10 },
    { id: "2",name: "Excellent Smart Perro Senior 15 Kg", 
    img: "https://catycanar.vtexassets.com/arquivos/ids/170441-800-auto?v=638355622829170000&width=800&height=auto&aspect=true", 
    price:27.354, 
    category: "alimento para perros", 
    description: "Excellent adult 7+ Smart es un alimento balanceado para perros senior con proteínas de alta digestibilidad y nivel moderado de grasas que ayudan a mantener una conformación corporal ideal en los perros mayores. Otros de sus beneficios es que contiene prebióticos y minerales quelados para favorecer la absorción de nutrientes. Mantiene una apropiada relación entre calcio y fósforo para la conservación de dientes y huesos saludables y antioxidantes naturales para retardar la aparición de trastornos producidos por el envejecimiento.",
    age: "Señor",
    size:"Chico / Mediano / Grande / Gigante",
    brand:"Purina Excellent",
    weigth:"15 kg",
    med: "No",
    stock: 10 },
    { id: "3", name: "Excellent Smart Formula Perro Cachorro 20 Kg", 
    img: "https://catycanar.vtexassets.com/arquivos/ids/158198-800-auto?v=637732978580000000&width=800&height=auto&aspect=true", 
    price: 33.361, 
    category: "alimento para perros", 
    description: "Excellent Puppy Formula Smart es un alimento balanceado para perros cachorros que ayuda a la formación de músculos fuertes, una alta digestibilidad, una piel sana y un pelaje brilloso. La incorporación de calcio y fósforo ayuda al desarrollo de dientes y huesos sanos. Es un alimento con sabor óptimo, sin colorantes ni saborizantes artificiales.",
    age: "Cachorro",
    size:"Chico / Mediano / Grande / Gigante",
    brand:"Purina Excellent",
    weigth:"20 kg",
    med: "No",
    stock: 10 },
    { id: "4",name: "Vitalcan Complete Gato Adulto X 15 Kg", 
    img: "https://catycanar.vtexassets.com/arquivos/ids/167685-800-auto?v=638144854676530000&width=800&height=auto&aspect=true", 
    price: 22.815, 
    category: "alimento para gato", 
    description: "Vitalcan Complete gato adulto es un alimento para gatos adultos a partir de 12 meses y hasta 7 años de edad. Proporciona: un pelo más sano y brillante, un tracto urinario saludable, un irresistible sabor sin colorantes artificiales.",
    age: "Adulto",
    size:"Todos",
    brand:"VitalCan Complete Gato",
    weigth:"15 kg",
    med: "No",
    stock: 10 },
    { id: "5",name: "Vitalcan Complete Gato Senior X 7.5 Kg", 
    img: "https://catycanar.vtexassets.com/arquivos/ids/167706-800-auto?v=638144878815500000&width=800&height=auto&aspect=true", 
    price:13.698, 
    category: "alimento para gato", 
    description: "Vitalcan Complete gato senior es un alimento para gatos adultos mayores de 7 años. Aporta minerales quelados que favorecen los procesos metabólicos, proteínas de alto valor biológico y vitaminas del complejo B que los gatos mayores necesitan en esta etapa de la vida. Protege su pelo y su sistema urinario, además de controlar el olor de las heces.",
    age: "Señor",
    size:"Todos",
    brand:"VitalCan Complete Gato",
    weigth:"7.5 kg",
    med: "No",
    stock: 10 },
    { id: "6", name: "Vitalcan Complete Gato Kitten X 7.5 Kg", 
    img: "https://catycanar.vtexassets.com/arquivos/ids/167682-800-auto?v=638144848631300000&width=800&height=auto&aspect=true", 
    price:13.347 , 
    category: "alimento para gato", 
    description: "Vitalcan Complete gato kitten es un alimento formulado para gatos desde el destete hasta el primer año de edad. Proporciona soporte en el desarrollo de su sistema inmune, aporta nutrientes para un óptimo crecimiento y resulta tentador para tu gato ya que sus croquetas tienen un irresistible sabor sin colorantes.",
    age: "Cachorro",
    size:"Todos",
    brand:"VitalCan Complete Gato",
    weigth:"7.5 kg",
    med: "No",
    stock: 10 },
    { id: "7",name: "Juguete Perro Gallina, Sonido Animal, Látex, 48 Cm", 
    img: "https://catycanar.vtexassets.com/arquivos/ids/163179-800-auto?v=637786407578700000&width=800&height=auto&aspect=true", 
    price:11.270 , 
    category: "accesorios perro", 
    description: " Gallina de latex con Bikini para perros, juguete con sonido",
    age: "Todos",
    size:"Todos",
    brand:"KFC",
    weigth:"----",
    med: "No",
    stock: 10 },
    { id: "8",name: "Juguete Para Gato Raton Interactivo Gigwi", 
    img: "https://catycanar.vtexassets.com/arquivos/ids/159960-800-auto?v=637733199347400000&width=800&height=auto&aspect=true", 
    price:15.326, 
    category: "accesorios gato", 
    description: "Ratón a control remoto interactivo para gatos",
    age: "Todos",
    size:"Todos",
    brand:"Ratatoile",
    weigth:"----",
    med: "No",
    stock: 10 },
  ];
    
    export const getProducts = () => {
      return new Promise((resolve, reject) => {
        
        if (products.length > 0) {
          setTimeout(() => {
            resolve(products);
          }, 2000);
        } else {
          reject("No hay productos");
        }
      });
    };
  
    export const getProductById = (id) => {
      return new Promise((resolve, reject) => {
        
        if (products.length > 0) {
          const product = products.find( p => p.id === id);
          
          setTimeout(() => {
            if(!product) {
              reject(`No se encuentra el productos con el id ${id}`)
            }
            resolve(product);
          }, 2000);
        } else {
          reject("No hay productos");
        }
      });
    };