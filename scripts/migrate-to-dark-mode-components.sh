#!/bin/bash

# This script helps find files that need to be updated to support dark mode
# It does not make changes automatically but provides guidance

YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}==== Finding files with hardcoded background colors ====${NC}"

echo -e "\n${YELLOW}Files with bg-gray-50 (light box backgrounds):${NC}"
grep -r "bg-gray-50" --include="*.tsx" --include="*.jsx" app/

echo -e "\n${YELLOW}Files with bg-gray-900 (code block backgrounds):${NC}"
grep -r "bg-gray-900" --include="*.tsx" --include="*.jsx" app/

echo -e "\n${GREEN}==== Manual migration steps ====${NC}"
echo -e "1. Import the components at the top of each file:"
echo -e "   ${YELLOW}import { CodeBlock, ContentBox } from \"@/components/ui/code-block\"${NC}"
echo -e "\n2. Replace light boxes:"
echo -e "   ${YELLOW}From: <div className=\"bg-gray-50 p-4 rounded-lg\">...</div>${NC}"
echo -e "   ${YELLOW}To:   <ContentBox>...</ContentBox>${NC}"
echo -e "\n3. Replace code blocks:"
echo -e "   ${YELLOW}From: <pre className=\"bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto\">...</pre>${NC}"
echo -e "   ${YELLOW}To:   <CodeBlock>...</CodeBlock>${NC}"
echo -e "\n4. For additional classes, use className prop:"
echo -e "   ${YELLOW}<ContentBox className=\"mb-6\">...</ContentBox>${NC}"
echo -e "   ${YELLOW}<CodeBlock className=\"my-3\">...</CodeBlock>${NC}"

echo -e "\n${GREEN}See app/core-components/page.tsx for a complete example of the migration${NC}" 