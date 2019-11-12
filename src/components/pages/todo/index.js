import React from 'react'
import { List } from 'antd';
import TodoItem from '../../views/TodoItem'

class Todo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                {title:'Racing car sprays burning fuel into crowd.', completed: false},
                {title:'Japanese princess to wed commoner.', completed: false},
                {title:'Australian walks 100km after outback crash.', completed: false},
                {title:'Man charged over missing wedding girl.', completed: false},
                {title:'Los Angeles battles huge wildfires.', completed: false},
              ],
        }
    }

    render(){
        return(
            <div>
                <h2>
                    Todos
                </h2>
                <div>
                        <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.state.data}
                        renderItem={(item,index) => (
                            <List.Item>
                              <TodoItem item={item} onClickItem={() => this.onClickItemTodo(index)}/>
                            </List.Item>
                        )}
                        />
                </div>
            </div>
        )
    }

    onClickItemTodo(i) {
        console.log("click item " + i)
        const data = this.state.data.slice();
        data[i].completed = !data[i].completed;
        this.setState({data});
    }
}

export default Todo