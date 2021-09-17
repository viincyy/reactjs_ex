#include<iostream>
#include<queue>
using namespace std;

class BST {
private:
	int data;
	BST* left;
	BST* right;
public:
	BST() {
		left = right = NULL;
	}

	void insert(BST* &root, int value) {
		BST* newNode = new BST;
		newNode->data = value;
		newNode->left = NULL;
		newNode->right = NULL;

		if (root == NULL) {
			root = newNode;
		}
		if (value > root->data) {
			insert(root->right, value);
		}
		else if (value < root->data) {
			insert(root->left, value);
		}
	}

	void Inorder(BST* &root) {
		if (root == NULL) {
			return;
		}
		Inorder(root->left);
		cout << root->data << " ";
		Inorder(root->right);
	}

	void Search(BST* root, int value) {
		if (root == NULL) {
			return;
		}
		if (value > root->data) {
			Search(root->right, value);
		}
		else if (value < root->data) {
			Search(root->left, value);
		}
		else if (value == root->data) {
			cout << "EXIST" << endl;
			return;
		}
	}

	BST* findMinRight(BST* root) {
		while (root != NULL) {
			root = findMinRight(root->left);
		}
		return root;
	}

	void Delete(BST* &root, int value){
		if (root == NULL) {
			return;
		}
	
		// Tim vi tri cua phan tu can xoa
		if (value > root->data) {
			Delete(root->right, value);
		}
		else if(value < root->data){
			Delete(root->left, value);
		}
		else if (value == root->data) {
			// Truong hop node la'
			if (root->left == NULL && root->right == NULL) {
				delete root;
				root = NULL;
			}
			// Truong hop node co 1 con
			else if ((root->left == NULL && root->right != NULL)|| root->left != NULL && root->right == NULL) {
				BST* buffer = root;
				root = (root->left) ? root->left : root->right;
				delete buffer;
			}

			// Node co 2 con
			else if (root->left != NULL && root->right != NULL) {
				BST* min = findMinRight(root->right);
				root->data = min->data;
				
				// Xoa node leaf
				Delete(root->right, min->data);
			}
		}
	}
};

int main() {
	BST *bst = NULL;
	int keys[] = { 15, 10, 20, 8, 12, 16, 25 };
	for (int key : keys) {
		bst->insert(bst, key);
	}
	bst->Inorder(bst);
	bst->Search(bst, 15);
	system("pause");
	return 0;
}