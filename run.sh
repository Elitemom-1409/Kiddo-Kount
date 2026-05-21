#!/bin/bash
cd "/home/mozart-4604/My Project_Opencode/kiddo-kount"
echo "Starting Next.js Dev Server at $(date)" >> dev.log
WATCHPACK_POLLING=true NEXT_TELEMETRY_DISABLED=1 npx next dev --port 3005 >> dev.log 2>&1
echo "Next.js Dev Server exited with code $? at $(date)" >> dev.log
