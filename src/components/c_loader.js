

function Loader() {
    return (
        <>
            <div className="loaderContainer">

                <div className="loader">
                    <svg width="100%" height="100%">
                        <g className="sHide">
                            <text x="50%" y="52%" textAnchor="middle"  >
                                REBECCA SU
                            </text>
                        </g>
                        <g className="sShow">
                            <text x="50%" y="46%" textAnchor="middle"  >
                                REBECCA
                            </text>
                            <text x="50%" y="55%" textAnchor="middle"  >
                                SU
                            </text>
                        </g>
                    </svg>
                </div>
            </div>


        </>
    )
}

export default Loader;
