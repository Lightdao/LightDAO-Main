//TODO: import correct header and footer (currently missing)
import React from "react";
import { useState } from "react";
import AccountSettingsProfileOnePage from "../components/AccountSettingsProfileOnePage";
import AccountSettingsWalletOnePage from "../components/AccountSettingsWalletOnePage";
import AccountSettingsWalletOnePageNotifications from "../components/AccountSettingsWalletOnePageNotifications";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export interface ChangePageProps {
    changeSettingsPageHandler: (index: number) => void;
}

const AccountSettings: React.FC<{}> = () => {
    return (
        <>
            <MainHeader />
            <CurrentSettingsPage />
            <MainFooter />
        </>
    );
}

const CurrentSettingsPage: React.FC<{}> = () => {
    //TODO: make this more clear instead of just using numbers
    const [accountSettingsPageNumber, setAccountSettingsPageNumber] = useState(0);

    function changeSettingsPage(pageNumber: number)
    {
        setAccountSettingsPageNumber(pageNumber);
    }

    switch (accountSettingsPageNumber)
    {
        case 0:
            return <AccountSettingsProfileOnePage changeSettingsPageHandler={changeSettingsPage}/>;
        case 1:
            return <AccountSettingsWalletOnePage changeSettingsPageHandler={changeSettingsPage}/>;
        case 2:
            return <AccountSettingsWalletOnePageNotifications changeSettingsPageHandler={changeSettingsPage}/>;
    }

    return <></>;
}

export default AccountSettings;