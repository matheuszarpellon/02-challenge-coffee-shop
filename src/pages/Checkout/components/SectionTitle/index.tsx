import { ReactNode } from "react";
import { BaseRegularText } from "../../../../components/Typography";
import { SectionTitleContainer } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, icon }) => {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <BaseRegularText color="subtitle">{title}</BaseRegularText>
        <BaseRegularText size="s">{subtitle}</BaseRegularText>
      </div>
    </SectionTitleContainer>
  );
}
