
let _array = [];

for(x=0; x<10; x++)
_array.push(Array.from(Array(10).keys()));

_array.forEach((num,idx)=>{
    _array[idx] = _array[idx].map(num1=>num1+1)
})

_array.forEach((num,idx)=>{
    _array[idx] = _array[idx].map(num1=>num1*(idx+1))
})

_array.forEach((num,idx)=>{
    let output = '';
    num.forEach((num1,idx1)=>{
        output+=`<td id="${idx1+1}x${idx+1}">${num1}</td>`
    })
    let _output = `<td>${output}</td>`;
    document.getElementById('tablebody').innerHTML += _output
})

const reset = () =>{
    _array.forEach((num,idx)=>{
        num.forEach((num1,idx1)=>{
            document.getElementById(`${idx1+1}x${idx+1}`).style.background = 'white'
        })
        
    })
}

document.getElementById('submit').addEventListener('click', ()=>{
    reset();
    const __num = parseInt(document.getElementById('input').value);
    const _result = [];
    _array.forEach((num,idx)=>{
        result = num.forEach((num1,idx1)=>{
            if(num1 === __num && idx1!==0 && idx !== 0)
            _result.push(`${idx1+1}x${idx+1}`)
        })
    })

    _result.forEach(res=>{
        const [x,y]=res.split('x');
        for(v=x; v>0; v--)
        document.getElementById(`${v}x${y}`).style.background = 'red'
        for(d=y; d>0; d--)
        document.getElementById(`${x}x${d}`).style.background = 'red'
        document.getElementById(res).style.background = 'red'
    })
})



