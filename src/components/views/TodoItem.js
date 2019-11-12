import React from 'react'
import { Checkbox} from 'antd'

export default class TodoItem extends React.Component {

    render(){
        return (
        <div onClick={() => this.props.onClickItem()}>
                <Checkbox checked={this.props.item.completed}> </Checkbox>
            {this.props.item.title}
        </div>
        );
    }

}