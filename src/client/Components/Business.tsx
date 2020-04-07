import * as React from 'react';

const Business: React.FC<BusinessProps> = () => {

    return (
        <main className="container my-5">
            <section className="justify-content-center">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h1 className="text-primary text-center">Are You A Business?</h1>
                        <p className="text-primary"> In a business, one of the biggest challenges for thier business is gauging customer’s satisfaction.
                        A poll or survey are good tool to use to get feedback, but then you have to use seperate tools to utilize the data. Bounce can help with the entire process by providing a organized platform where consumers can input data and it immediately be displayed in a visual representation.
                        This allows you to quickly recognize both issues and successes with how your business is providing the service.
                        Another utilization of this tool is being able to use it to survey your workforce. As an employer, you don’t have an easy tool to survey the people that are in your business every day outside of setting up a suggestion jar.
                        Bounce can be your digital suggestion jar, ensuring unbiased input from your employees.
                        This gives your workers an oppurtunity to be heard and gives you a clearer view of oppurtunities to improve your organization. </p>
                        <button className="text-primary float-right"> Let Get Started?</button>
                    </div>
                </div>
            </section>
        </main>
    );


};

interface BusinessProps { };

export default Business;