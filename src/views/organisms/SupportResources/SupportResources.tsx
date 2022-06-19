import React from 'react'

import { PageBlock } from '../../molecules'

import { SupportResourcesContent, SupportResourcesToolbar } from './views/molecules'

const SupportResources = () => (
    <PageBlock>
        <PageBlock.Header>
            <SupportResourcesToolbar />
        </PageBlock.Header>
        <PageBlock.Content>
            <SupportResourcesContent />
        </PageBlock.Content>
    </PageBlock>
)

export default SupportResources
