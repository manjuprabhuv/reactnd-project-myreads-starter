import React from 'react';

class DropDown extends React.Component{

    render(){
        return(
        <div className={this.props.clazzName}>
            <select>
                {
                    Object.entries(this.props.dropdownVals).map(([key, value]) => {
                       // console.log()
                        console.log(`${key}: ${value}`);
                        return (<option key ={key} value={key} >{value}</option>);
                    })
                } 
            </select>
        </div>         
        )
    }
}

export default DropDown;
