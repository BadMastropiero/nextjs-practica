import React ,{useState} from "react";
 
interface FormData {
    nombre: string;
    apellido: string;
    edad: number;
  }

export default function Formulario() {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        apellido: '',
        edad: 0
      });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: name === 'edad' ? Number(value) : value
        }));
      };  

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)
      };
    return (
        <div>
            <h4>Formulario de profesor</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">NOMBRE</label>
                <input
                    type="text"
                    name="nombre"
                    value={ formData.nombre }
                    onChange={ handleChange }
                />
                <label htmlFor="apellido">APELLIDO</label>
                <input
                    type="text"
                    name="apellido"
                    value={ formData.apellido }
                    onChange={ handleChange }
                />
                <label htmlFor="edad">EDAD</label>
                <input
                    type="number"
                    name="edad"
                    value={ formData.edad }
                    onChange={ handleChange }
                />
                <button type="submit">enviar</button>
            </form>
        </div>
    );
}