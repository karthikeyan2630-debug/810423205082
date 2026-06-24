# Stage 1

## Problem Statement
The objective is to display the top 10 unread notifications based on priority and recency.

## Priority Rules
Priority order:
1. Placement
2. Result
3. Event

Weights:
- Placement = 3
- Result = 2
- Event = 1

## Approach
1. Fetch notifications from the Notification API.
2. Filter unread notifications.
3. Assign weights based on notification type.
4. Calculate a priority score using weight and recency.
5. Sort notifications in descending order.
6. Display the top 10 notifications.

## Efficient Maintenance