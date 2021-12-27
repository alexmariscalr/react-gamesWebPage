import './../../../assets/styles/shortcut.css'


export default function Shortcuts(props) {
    const index = []

    function confirmar() {
        var resultado= window.confirm('¿Estas seguro?');
        if(resultado === true){
            props.setcurrentQuiz()
        }
        else {
            return;
        }
    }


    
    for (let i=1;i<11;i++){        
            index.push(
                <button type='button' id={i} 
                title= {i}
                onClick={() => {
                    if (props.currentQuiz === 0) {
                        var resultado = window.confirm('Remember to save your answer before moving on to the next question')
                    }
                    if (resultado === true || props.currentQuiz !== 0) {
                        props.setcurrentQuiz(i-1)
                        props.clear()
                    } else {
                        return
                    }
                    }}>{i}</button>
            )}
    
    

    return (
    <div className='indices'>
            <div>{index}</div>
            
    </div>
    );
    
}