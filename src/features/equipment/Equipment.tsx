import { FC } from "react";
import { ContentWrapper, GroupWrapper } from "../../shared/ui/atoms";
import { GameItemsGrid } from "../../shared/ui/organisms";

const Equipment: FC = () => {
    return (
        <GroupWrapper>
            <ContentWrapper>
                <GameItemsGrid items={[]}/>
            </ContentWrapper>
        </GroupWrapper>
    )
}
export default Equipment;
