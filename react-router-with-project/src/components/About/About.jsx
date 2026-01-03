import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">React is a JavaScript library for building fast, interactive user interfaces.
It uses reusable components, JSX, and a virtual DOM for efficient updates.
State, props, and hooks manage data and behavior in modern React apps.

                        </p>
                        <p className="mt-4 text-gray-600">In 2026, React is still a core requirement for frontend developer jobs worldwide.
Most companies expect React knowledge along with TypeScript, hooks, and modern frameworks like Next.js.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
