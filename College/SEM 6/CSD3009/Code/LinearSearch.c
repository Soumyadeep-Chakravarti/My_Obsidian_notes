#include <stdio.h>

// Function to perform linear search
int linearSearch(int arr[], int n, int target) {

    // Loop through each element of the array

    for (int i = 0; i < n; i++) {

        // If the current element matches the target

        if (arr[i] == target) {

            // Return the index of the element

            return i;
        }
    }

    // If the loop finishes without finding the element, return -1

    return -1;
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 23;

    // Call the linearSearch function
    int result = linearSearch(arr, n, target);

    // Check the result
    if (result != -1) {
        printf("Element %d found at index %d.\n", target, result);
    } else {
        printf("Element %d not found in the array.\n", target);
    }

    return 0;
}



