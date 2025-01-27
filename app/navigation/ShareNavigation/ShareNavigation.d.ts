import type { StackScreenProps } from '@react-navigation/stack';

import type { CredentialRecordRaw } from '../../model/credential';

export type ShareNavigationParamsList = {
  ShareHomeScreen: undefined;
  PresentationPreviewScreen: {
    selectedCredentials: CredentialRecordRaw[];
  };
  CredentialScreen: {
    rawCredentialRecord: CredentialRecordRaw;
    noShishKabob?: boolean;
  };
};

export type ShareHomeScreenProps = StackScreenProps<ShareNavigationParamsList, 'ShareHomeScreen'>;
export type PresentationPreviewScreenProps = StackScreenProps<ShareNavigationParamsList, 'PresentationPreviewScreen'>;
export type CredentialScreenShareProps = StackScreenProps<ShareNavigationParamsList, 'CredentialScreen'>;
