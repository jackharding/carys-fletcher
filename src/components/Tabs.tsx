import React, { useState } from 'react';

interface ITabsProps {
    tabs: Array;
}

const Tabs: React.FC = (props: ITabsProps) => {
    const [tab, setTab] = useState(0);

    return(
        <div></div>
    );
}

export default Tabs;