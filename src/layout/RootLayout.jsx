import React from 'react'

const RootLayout = ({ children }) => {
    return (
        <div>
            <header>Header Component goes here...</header>
            <main>
                <aside>
                    Sidebar Component comes here...
                </aside>
                {children}
            </main>
            <footer>Footer Component goes here...</footer>
        </div>
    )
}

export default RootLayout