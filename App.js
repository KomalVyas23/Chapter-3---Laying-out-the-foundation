 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import Header from './src/components/Header/Header';
// Create nested elements h1,h2, h3 inside a container with class title (using createElement)
        const heading1 = React.createElement("h1",{
            id:'heading1'
        },"Heading 1!");

        const heading2 = React.createElement("h2",{
            id:'heading2'
        }, 'Heading 2!');

        const heading3 = React.createElement("h3",{
            id:'heading3'
        }, "Heading 3!");

        const container = React.createElement("div",{
            className: 'title'
        }, [heading1, heading2, heading3]);

        //Do the same using JSX
        const title1 = <h1 className='title1'>Title 1! This is created using JSX.</h1>;//JSX Element
        const title2 = <h2 className='title2'>Title 2! This is created using JSX.</h2>;//JSX Element
        const title3 = <h3 className='title3'>Title 3! This is created using JSX.</h3>;//JSX Element

        //We will use it for component composition - conponent inside another component
        const Title4 = () => {
            return(
                <>
                <p>Paragraph goes here!</p>
                </>
            );
        }
        // React Component is a function that return a JSX code.
        const ContainerJSX = () => {
            return(
                <>
                <div className="titleJSX">
                    {title1}
                    {title2}
                    {title3}
                    <Title4/>
                </div>
                </>
            );
        };


        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Header/>);
