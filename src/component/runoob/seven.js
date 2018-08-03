import React,{Component} from 'react';

// React 列表&Keys
export default class Seven extends Component{
    render(){
        const numbers = [1,3,'fgdg',7,9];
        const posts = [{id:1,title:'Hello World',content:'Welcome to learning React!'},
                       {id:2,title:'Installation',content:'You can install React from cnpm.'}]
        return(
            <div>
                <p className="title">Seven.js<b>React 列表&Keys</b></p>
                <NumberList numbers={numbers}/>
                <NumberList2 numbers={numbers}/>
                <hr/>
                <Blog posts={posts}/>
                <hr/>
                <NumberList3 numbers={numbers}/>
            </div>
        )
    }
}

// 使用JavaScript的map()方法创建列表
class NumberList extends Component{
    render(){
        const numbers = this.props.numbers;
        // const listItems = numbers.map(number_value=><li key={number_value.toString()}>{number_value}</li>)
        const listItems = numbers.map((number_value,index)=><li key={index}>{number_value}</li>)
        // 如果列表可以重新排序，我们不建议使用索引来进行排序，因为这会导致渲染变得很慢
        return(
            <ul>{listItems}</ul>
        )
    }
}


// 元素的 key 只有在它和它的兄弟节点对比时才有意义。
// key的正确使用方式
class ListItem extends Component{
    render(){
        return(
            <li>{this.props.value}</li>
        )
    }
}
class NumberList2 extends Component{
    render(){
        const numbers = this.props.numbers;
        const listItems = numbers.map(number=><ListItem key={number.toString()} value={number} />);
        return (
            <ul>{listItems}</ul>
        )
    }
}


// 元素的key在他的兄弟元素之间应该唯一
// 数组元素中使用的 key 在其兄弟之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的键。
class Blog extends Component{
    render(){
        const sidebar = (<ul>{this.props.posts.map(post=><li key={post.id}>{post.title}</li>)}</ul>);
        const content = this.props.posts.map(post=><div key={post.id}><h3>{post.title}</h3><p>{post.content}</p></div>);
        return(
           <div>{sidebar}<hr/>{content}</div>
        )
    }
}


// 在jsx中嵌入map()
// JSX 允许在大括号中嵌入任何表达式，所以我们可以在 map() 中这样使用：
class NumberList3 extends Component{
    render(){
        const numbers = this.props.numbers;
        return(
            <ul>{numbers.map((number_value,index)=><li key={index}>{number_value}</li>)}</ul>
            // 这么做有时可以使你的代码更清晰，但有时这种风格也会被滥用。就像在JavaScript中一样，何时需要为了
            // 可读性提取出一个变量，这完全取决于你。但请记住，如果一个map()嵌套了太多层级，那你就可以提取出组件
        )
    }
}