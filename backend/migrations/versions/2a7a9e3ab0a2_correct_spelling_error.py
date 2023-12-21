"""correct spelling error

Revision ID: 2a7a9e3ab0a2
Revises: 1fde33c2a234
Create Date: 2023-12-21 14:48:55.442659

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2a7a9e3ab0a2'
down_revision = '1fde33c2a234'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('last_received_comments_read_time', sa.DateTime(), nullable=True))
        batch_op.drop_column('last_recived_comments_read_time')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('last_recived_comments_read_time', sa.DATETIME(), nullable=True))
        batch_op.drop_column('last_received_comments_read_time')

    # ### end Alembic commands ###